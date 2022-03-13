// Input
export const Input = ({
  name,
  label,
  type,
  disabled,
  style,
  className,
  autoFocus,
  ...rest
}) => (
  <div className="input-group flex flex-col relative">
    {label ? (
      <label
        htmlFor={name}
        className={`text-[15px] ${
          disabled ? "text-gray-500" : "text-gray-800"
        } font-semibold text-left`}
        style={style}
      >
        {label}
      </label>
    ) : (
      <></>
    )}
    <input
      id={name}
      type={type}
      name={name}
      {...rest}
      className={` px-3 sm:px-4 w-full h-[50px] mt-3  form-input placeholder-gray-400 border focus:border-gray-700 active:border-gray-700 hover:border-gray-700 !rounded focus:bg-white ${className}`}
      style={style}
      disabled={disabled}
      autoFocus={autoFocus}
    />
  </div>
);

// Textarea

export const TextArea = ({ label, name, style, disabled, className, ...rest }) => (
  <div className="form-control">
    {label ? (
      <label
        htmlFor={name}
        className={`text-[15px] ${
          disabled ? "text-gray-500" : "text-gray-800"
        } font-semibold text-left`}
        style={style}
      >
        {label}
      </label>
    ) : (
      <></>
    )}
    <textarea
      className={`mt-3 form-textarea h-32 border focus:border-gray-700 active:border-gray-700 hover:border-gray-700 !rounded focus:bg-white ${className}`}
      id={name}
      name={name}
      {...rest}
    />
  </div>
);
