const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-6 max-md:m6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full py-6 text-center">
            <h1 className="text-3xl font-bold">
             <span className="text-primary">Admin</span> Login
            </h1>
            <p>Enter your credentials to access the admin panel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
