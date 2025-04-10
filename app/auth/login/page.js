"use client";
import React, { useState, useEffect } from "react";
import AuthCard from "@/components/ui/AuthCard";
import Form from "@/components/ui/Form";
import Bounded from "@/components/wrappers/Bounded";
import Container from "@/components/wrappers/Container";
import { SCHEMA__LoginForm } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { createClient } from "@/supabase/client";
import { useSearchParams } from "next/navigation";

const Login = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
    formState: { isValid },
  } = useForm({
    mode: "all",
  });

  const [formMessage, setFormMessage] = useState(null);
  const [payloadPosting, setPayloadPosting] = useState(false);
  const [emailVerified, setEmailVerified] = useState(null);

  const supabase = createClient();

  const onSubmit = async (formData) => {
    setPayloadPosting(true);
    setFormMessage(null);
    formData.options = { shouldCreateUser: false };
    try {
      let { data, error } = await supabase.auth.signInWithOtp(formData);
      setPayloadPosting(false);
      reset();
      setFormMessage({
        type: `success`,
        message: `Please continue logging in by clicking on the magic link we sent you on your email address.`,
      });
      if (error) {
        throw error;
      }
    } catch (error) {
      console.log(error.code);
      setPayloadPosting(false);
      setFormMessage({
        type: `error`,
        message:
          error.code === `otp_disabled`
            ? `Email address not found. Please create your account and try again.`
            : `Oops, something went wrong. Please try again later.`,
      });
    }
  };

  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("email_verified")) {
      setEmailVerified(true);
    }
  }, []);

  return (
    <>
      <Bounded className="b__auth__variant01 b__size-lg u__background-light">
        {emailVerified && (
          <Container className="mb-[2.5rem]">
            <div className="max-w-[450px] mx-auto">
              <div className={`c__form__message c__form__message--success`}>
                {`Your email address was verified. Please continue logging in`}
              </div>
            </div>
          </Container>
        )}
        <Container>
          <div className="max-w-[500px] mx-auto">
            <AuthCard>
              <Form
                isValid={isValid}
                formFields={SCHEMA__LoginForm}
                register={register}
                errors={errors}
                control={control}
                buttonTitle={`Get Magic Link`}
                onSubmit={handleSubmit(onSubmit)}
                payloadPosting={payloadPosting}
                formMessage={formMessage}
              />
            </AuthCard>
          </div>
        </Container>
      </Bounded>
    </>
  );
};

export default Login;
