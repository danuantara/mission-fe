import InputField from "../components/InputField";
import Button from "../components/Button";

export default function ForgotPassword() {
  return (
    <div className="flex flex-col justify-center items-center !px-32 !py-16">
      <div className="border border-[var(--border)] bg-white !p-9 rounded-[4px] drop-shadow-2xl">
        <div className="flex flex-col justify-center items-center gap-2.5 !mb-4">
          <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
          <p className="text-sm text-gray-600 mb-6">
            Ini hanya testing link "Lupa Password?", belum berfungsi ya, hehehe
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <InputField
            label="Email"
            name="forgotEmail"
            type="forgotEmail"
            placeholder="contoh@email.com"
            required
          />

          <Button className="w-full mt-4">Kirim Link Reset</Button>
        </div>
      </div>
    </div>
  );
}
