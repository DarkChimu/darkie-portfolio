const Container = ({ children }) => {
  return (
    <div className="mx-auto max-w-3xl px-5 mb-5 flex flex-col gap-10">
      <main className="flex flex-col gap-16">{children}</main>
    </div>
  );
};

export default Container;
