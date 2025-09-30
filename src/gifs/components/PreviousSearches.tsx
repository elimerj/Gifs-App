interface PreviousSearchesProps {
  searches: string[];
  onLabelClick: (term: string) => void;
}

export const PreviousSearches = ({
  searches,
  onLabelClick,
}: PreviousSearchesProps) => {
  return (
    <>
      {/* Busquedas Previas */}
      <div className="previous-searches">
        <h2>Busquedas Previas</h2>
        <ul className="previous-searches-list">
          {searches.map((term) => (
            <li key={term} onClick={() => onLabelClick(term)}>
              {term}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
