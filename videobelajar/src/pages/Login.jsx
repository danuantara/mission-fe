import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Logo from "../assets/Logo.svg";
import PasswordField from "../components/PasswordField";
import ForgotPassword from "../components/ForgotPassword";
import Divider from "../components/Divider";
import GoogleLogo from "../assets/google-icon.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("loginEmail");
    const savedPassword = localStorage.getItem("loginPassword");

    if (savedEmail) {
      setEmail(savedEmail);
    }
    if (savedPassword) {
      setPassword(savedPassword);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("loginEmail", email);
  }, [email]);

  useEffect(() => {
    localStorage.setItem("loginPassword", password);
  }, [password]);

  return (
    <div>
      <div className="border-b border-b-[var(--border)]  drop-shadow-md bg-white md:!px-30 !py-3">
        <header>
          <img src={Logo} alt="videobelajar" className="w-[193px]" />
        </header>
      </div>
      <div className="flex justify-center items-center !px-[120px] !py-[64px]">
        <div className="flex flex-col w-full max-w-[590px] border border-[var(--border)] rounded-[4px] bg-white !p-9 drop-shadow-md">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-3xl text-[var(--text-dark)] font-semibold">
              Masuk ke Akun
            </h1>
            <p className="font-[Lato] text-[var(--text-disable)] !mb-8">
              Yuk, lanjutin belajarmu di videobelajar.
            </p>
          </div>
          <div className="flex flex-col gap-6 !mb-2.5">
            <InputField
              label="E-mail"
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordField
              label="Kata Sandi"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-end mt-2 !mb-8">
            <ForgotPassword />
          </div>
          <div className="flex flex-col gap-4">
            <Link to="/home">
              <Button
                variant="primary"
                className="flex w-full justify-center items-center"
              >
                Masuk
              </Button>
            </Link>
            <Link to="/register">
              <Button
                variant="primary"
                className="flex w-full justify-center items-center"
              >
                Daftar
              </Button>
            </Link>
            <Divider />
            <Button variant="google">
              <img src={GoogleLogo} alt="google" /> Masuk dengan Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
