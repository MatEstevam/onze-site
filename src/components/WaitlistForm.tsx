"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useEffect } from "react";

const schema = z.object({
  email: z.string().email("Email inválido"),
  persona: z.enum(["marca", "atleta"], {
    message: "Selecione uma opção",
  }),
});

type FormData = z.infer<typeof schema>;

export function WaitlistForm({
  defaultRole,
}: {
  defaultRole?: "marca" | "atleta";
}) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (defaultRole) {
      setValue("persona", defaultRole);
    }
  }, [defaultRole, setValue]);

  async function onSubmit(data: FormData) {
    // TODO: integrate with Supabase or Resend endpoint
    console.log("Waitlist submission:", data);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <p className="font-display text-2xl font-semibold text-accent">
          Você está no onze.
        </p>
        <p className="text-text-muted mt-2">
          Vamos avisar quando a plataforma abrir.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-xl"
    >
      <div className="flex-1 flex flex-col">
        <input
          type="email"
          placeholder="seu@email.com"
          {...register("email")}
          className="w-full h-12 px-5 bg-white/[0.04] border border-white/[0.08] rounded-full text-text placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:bg-white/[0.06] transition-all duration-300"
        />
        {errors.email && (
          <span className="text-red-400 text-xs mt-1">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <select
          {...register("persona")}
          defaultValue=""
          className="h-12 px-5 bg-white/[0.04] border border-white/[0.08] rounded-full text-text-muted focus:outline-none focus:border-accent/50 focus:bg-white/[0.06] transition-all duration-300 appearance-none cursor-pointer w-full sm:min-w-[140px]"
        >
          <option value="" disabled>
            Eu sou...
          </option>
          <option value="marca">Marca / Agência</option>
          <option value="atleta">Atleta</option>
        </select>
        {errors.persona && (
          <span className="text-red-400 text-xs mt-1">
            {errors.persona.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="h-12 px-8 bg-accent text-bg font-display font-semibold rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 disabled:opacity-50 cursor-pointer whitespace-nowrap active:scale-95"
      >
        {isSubmitting ? "Enviando..." : "Entrar na lista"}
      </button>
    </form>
  );
}
