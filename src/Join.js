// Join.js
import React from 'react';
import './Join.css';
import useForm from './useForm';

const Join = () => {
  const {
    Id,
    IdError,
    Nickname,
    NicknameError,
    Birth,
    BirthError,
    email,
    emailError,
    password,
    passwordError,
    passwordCheck,
    passwordCheckError,
    handleIdChange,
    handleEmailChange,
    handlePasswordChange,
    handlePasswordSame,
    handleNicknameChange,
    handleBirthChange,
    } = useForm();


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`id: ${Id}, Email: ${email}, Password: ${password}`);
  }

  return (
  <div className="joinForm">
    <form onSubmit={handleSubmit}>
      <h2>회원 가입</h2>

      <div>
        <input type="text" placeholder='아이디' value={Id} onChange={handleIdChange} />
        {IdError && <p className='errorMessage'> 아이디는 5~15자리의 영문 대소문자와 숫자로만 입력해주세요.</p>}
      </div>

      <div>
        <input type="email" placeholder='이메일' value={email} onChange={handleEmailChange} />
        {emailError && <p className='errorMessage'>이메일 형식이 잘못되었습니다.</p>}
      </div>

      <div>
        <input type="password" placeholder='비밀번호' value={password} onChange={handlePasswordChange} />
        {passwordError && <p className='errorMessage'>비밀번호는 8자리 이상이며 숫자, 대소문자 알파벳을 포함해야 합니다.</p>}
      </div>

      <div>
        <input type="password" placeholder='비밀번호 확인' value={passwordCheck} onChange={handlePasswordSame} />

        {(!passwordError && passwordCheckError) && <p className='errorMessage'>비밀번호가 다릅니다.</p>}
      </div>

      <div>
        <input type="text" placeholder='생년월일 8자' value={Birth} onChange={handleBirthChange} />
        {BirthError && <p className='errorMessage'> 올바른 생년월일 8자를 입력해주세요</p>}
      </div>

      <div>
        <input type="text" placeholder='닉네임' value={Nickname} onChange={handleNicknameChange} />
        {NicknameError && <p className='errorMessage'> 닉네임을 2글자 이상 10 글자 이하로 입력해주세요.</p>}
      </div>

      <button type="submit" disabled={passwordError || emailError || IdError || passwordCheckError || !Id || NicknameError || BirthError }>회원 가입</button>

    </form>
  </div>
  );
};

export default Join;