import './login.css'

interface LoginProps {
  description: string;
  typeBox: string;
}

export const Login = ({ description, typeBox }: LoginProps) => {
  return (
    <div className='box-login'>
      <p className='input-description'>{description}</p>
      <input className="input-box" type={typeBox} />
    </div>
  );
};
