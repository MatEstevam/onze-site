import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PasswordInput } from "@/components/ui/PasswordInput";

async function handleGate(formData: FormData) {
  "use server";
  const password = formData.get("password") as string;
  if (password === process.env.SITE_PASSWORD) {
    (await cookies()).set("site-auth", password, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
    });
    redirect("/");
  }
  redirect("/gate?error=1");
}

export default async function GatePage({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  const query = await searchParams;
  const error = query.error;

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center px-4">
      <div className="max-w-sm w-full text-center">
        <img src="/logo-horizontal.svg" alt="Onze" width={120} height={32} className="mx-auto mb-8" />
        <p className="text-sm text-[var(--color-text-muted)] mb-6">
          Este site está em acesso restrito.
        </p>
        <form action={handleGate}>
          <PasswordInput
            name="password"
            placeholder="Senha de acesso"
            className="w-full px-4 py-3 pr-10 rounded-lg bg-white/[0.06] border border-white/[0.1] text-[var(--color-text)] text-sm placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
            autoFocus
          />
          {error && (
            <p className="text-xs text-red-400 mt-2">Senha incorreta.</p>
          )}
          <button
            type="submit"
            className="w-full mt-4 py-3 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg)] font-display font-semibold text-sm btn-accent transition-all"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
