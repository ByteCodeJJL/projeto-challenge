
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { FieldValues } from "react-hook-form";

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.432 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const EyeSlashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.243 4.243l-4.243-4.243" />
  </svg>
);

const ExclamationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
);

const inputBaseClasses = "w-full p-3 pr-10 border rounded-md outline-none transition-colors duration-200";
const getInputClasses = (hasError: boolean) => `${inputBaseClasses} ${hasError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'}`;

function LoginForm({ onToggleView }: { onToggleView: () => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const [mensagem, setMensagem] = useState<{ texto: string; tipo: 'sucesso' | 'erro' }>({ texto: '', tipo: 'erro' });

  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const { email, senha } = data;
    const senhaArmazenada = localStorage.getItem(email);
    if (!senhaArmazenada) return setMensagem({ texto: "E-mail não encontrado.", tipo: 'erro' });
    if (senhaArmazenada !== senha) return setMensagem({ texto: "Senha incorreta.", tipo: 'erro' });
    setMensagem({ texto: `Bem-vindo! Login bem-sucedido.`, tipo: 'sucesso' });
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Login</h1>
      <p className="text-gray-600 mb-8">Bem-vindo de volta!</p>

      {mensagem.texto && (
          <p className={`mb-4 text-center font-semibold ${mensagem.tipo === 'sucesso' ? 'text-green-600' : 'text-red-600'}`}>
            {mensagem.texto}
          </p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
          <div className="relative">
            <input id="email" type="email" placeholder="Digite seu e-mail" 
              className={getInputClasses(!!errors.email)}
              {...register("email", { required: "O e-mail é obrigatório" })}
            />
            {errors.email && <div className="absolute inset-y-0 right-0 pr-3 flex items-center"><ExclamationIcon /></div>}
          </div>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message?.toString()}</p>}
        </div>

        <div>
          <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
          <div className="relative">
            <input id="senha" type={showPassword ? "text" : "password"} placeholder="Digite a sua senha"
              className={getInputClasses(!!errors.senha)}
              {...register("senha", { required: "A senha é obrigatória" })}
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center">
              {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
            </button>
          </div>
          {errors.senha && <p className="text-red-500 text-sm mt-1">{errors.senha.message?.toString()}</p>}
        </div>

        

        <button type="submit" className="w-full py-3 px-4 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 transition-colors">Entrar</button>
      </form>

      <div className="mt-12 text-center">
        <p className="text-gray-800 mb-4">Não possui uma conta?</p>
        <button onClick={onToggleView} className="w-full py-3 px-4 bg-white text-gray-800 font-semibold rounded-md border border-gray-300 hover:bg-gray-100 transition-colors">
          Criar conta
        </button>
      </div>
    </div>
  );
}

function CadastroForm({ onToggleView }: { onToggleView: () => void }) {
  const [mensagem, setMensagem] = useState<{ texto: string; tipo: 'sucesso' | 'erro' }>({ texto: '', tipo: 'erro' });
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const { nome, email, senha } = data;
    if (localStorage.getItem(email)) return setMensagem({ texto: "Este e-mail já está cadastrado.", tipo: 'erro' });
    localStorage.setItem(email, senha); // Em uma aplicação real, você também salvaria o nome
    setMensagem({ texto: `Conta para ${nome} criada com sucesso!`, tipo: 'sucesso' });
    reset();
  };
  
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Criar Conta</h1>
      <p className="text-gray-600 mb-8">Preencha os campos para se cadastrar.</p>

      {mensagem.texto && (
          <p className={`mb-4 text-center font-semibold ${mensagem.tipo === 'sucesso' ? 'text-green-600' : 'text-red-600'}`}>
            {mensagem.texto}
          </p>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
          <input id="nome" type="text" placeholder="Seu nome completo" 
            className={getInputClasses(!!errors.nome)}
            {...register("nome", { required: "O nome é obrigatório" })}
          />
          {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome.message?.toString()}</p>}
        </div>

        <div>
          <label htmlFor="email-cadastro" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
          <input id="email-cadastro" type="email" placeholder="seu.email@exemplo.com" 
            className={getInputClasses(!!errors.email)}
            {...register("email", { required: "O e-mail é obrigatório" })}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message?.toString()}</p>}
        </div>

        <div>
          <label htmlFor="senha-cadastro" className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
           <input id="senha-cadastro" type="password" placeholder="Mínimo 6 caracteres"
            className={getInputClasses(!!errors.senha)}
            {...register("senha", { required: "A senha é obrigatória", minLength: { value: 6, message: "A senha deve ter no mínimo 6 caracteres" } })}
          />
          {errors.senha && <p className="text-red-500 text-sm mt-1">{errors.senha.message?.toString()}</p>}
        </div>
        
        <button type="submit" className="w-full py-3 px-4 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 transition-colors">Criar conta</button>
      </form>
      
      <div className="mt-12 text-center">
        <p className="text-gray-800 mb-4">Já possui uma conta?</p>
        <button onClick={onToggleView} className="w-full py-3 px-4 bg-white text-gray-800 font-semibold rounded-md border border-gray-300 hover:bg-gray-100 transition-colors">
          Fazer login
        </button>
      </div>
    </div>
  );
}


export default  function Acesso() {
  const [isLoginView, setIsLoginView] = useState(true);

  useEffect(() => {
    document.title = isLoginView ? "Login" : "Cadastro";
  }, [isLoginView]);

  const toggleView = () => setIsLoginView(!isLoginView);

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {isLoginView ? <LoginForm onToggleView={toggleView} /> : <CadastroForm onToggleView={toggleView} />}
      </div>
    </main>
  );
}