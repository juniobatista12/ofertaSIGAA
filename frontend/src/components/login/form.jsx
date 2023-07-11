import { React, useState } from "react";

export default function LoginForm() {
  const [matricula, setMatricula] = useState("");
  const [email, setEmail] = useState("");

  const handleMatriculaChange = (event) => {
    setMatricula(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="matricula">
            Matrícula
          </label>
          <input
            type="text"
            id="matricula"
            name="matricula"
            autoComplete="matricula"
            required
            value={matricula}
            onChange={handleMatriculaChange}
        />
        </div>
        <div>
          <label htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={handleEmailChange}
        />
        </div>
      </form>
    </div>
  );
}