interface CustomHeaderProps {
  title: string;
  description?: string;
}

export const CustomHeader = ({ title, description }: CustomHeaderProps) => {
  return (
    <>
      {/* Header */}
      <div className="content-center">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </>
  );
};
