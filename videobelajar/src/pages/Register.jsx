import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Logo from "../assets/Logo.svg";
import PasswordField from "../components/PasswordField";
import ForgotPassword from "../components/ForgotPassword";
import Divider from "../components/Divider";
import GoogleLogo from "../assets/google-icon.png";
import SelectField from "../components/SelectField";
import PhoneSelect from "../components/PhoneSelect";

export default function Login() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const savedFullName = localStorage.getItem("FullName");
    const savedEmail = localStorage.getItem("Email");
    const savedGender = localStorage.getItem("Gender");
    const savedPassword = localStorage.getItem("Password");
    const savedConfirmPassword = localStorage.getItem("ConfirmPassword");

    if (savedFullName) {
      setFullName(savedFullName);
    }
    if (savedEmail) {
      setEmail(savedEmail);
    }
    if (savedGender) {
      setGender(savedGender);
    }
    if (savedPassword) {
      setPassword(savedPassword);
    }
    if (savedConfirmPassword) {
      setConfirmPassword(savedConfirmPassword);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("FullName", fullName);
  });

  useEffect(() => {
    localStorage.setItem("Email", email);
  }, [email]);

  useEffect(() => {
    localStorage.setItem("Gender", gender);
  }, [gender]);

  useEffect(() => {
    localStorage.setItem("Password", password);
  }, [password]);

  useEffect(() => {
    localStorage.setItem("ConfirmPassword", confirmPassword);
  }, [confirmPassword]);

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
              Pendaftaran Akun
            </h1>
            <p className="font-[Lato] text-[var(--text-disable)] !mb-8">
              Yuk, daftarkan akunmu sekarang juga!
            </p>
          </div>
          <div className="flex flex-col gap-6 !mb-2.5">
            <InputField
              label="Nama Lengkap"
              name="fullName"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <InputField
              label="E-mail"
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PhoneSelect label="No. HP" name="phoneNumber" required />

            <SelectField
              label="Jenis Kelamin"
              name="gender"
              required
              options={["Pria", "Wanita"]}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />

            <PasswordField
              label="Kata Sandi"
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <PasswordField
              label="Konfirmasi Kata Sandi"
              type="password"
              name="confirmPassword"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
                Daftar
              </Button>
            </Link>
            <Link to="/login">
              <Button
                variant="primary"
                className="flex w-full justify-center items-center"
              >
                Masuk
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
