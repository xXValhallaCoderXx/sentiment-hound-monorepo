import { signIn } from "next-auth/react";

const SignInPageView = ({ providers }: any) => {
  return (
    <div>
      {" "}
      {Object.values(providers).map((provider) => {
        return (
          <div key={provider.name}>
            <button
              onClick={() =>
                signIn(provider.id, {
                  callbackUrl: "http://localhost:3000/dashboard",
                })
              }
            >
              Sign in with {provider.name}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SignInPageView;
