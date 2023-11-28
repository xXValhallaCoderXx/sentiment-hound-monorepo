import type { InferGetServerSidePropsType } from "next";
import { signIn } from "next-auth/react";
import { getServerSideProps } from "@client/pages/auth/sign-in";

const SignInPageView = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      {providers &&
        Object.values(providers).map((provider) => {
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
