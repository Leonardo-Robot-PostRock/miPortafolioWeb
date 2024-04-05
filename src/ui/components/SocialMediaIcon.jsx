export const SocialMediaIcon = ({ link, icon: Icon, alt, className }) => {
  return (
    <div className="flex h-max animate-pulse items-center rounded-lg border-2 border-solid border-sky-400 dark:border-white">
      <a href={link}>
        <Icon
          className={`cursor-pointer fill-sky-400 p-1 dark:fill-white ${
            className === 'home' && 'h-10 w-10 2xl:h-16 2xl:w-16'
          } h-10 w-10`}
          alt={alt}
        />
      </a>
    </div>
  );
};
