type Props = {
  cols: string[],
  data: any[],
  renderers?: { [col: string]: (value: any, row: any) => React.ReactNode }
}

const Table: React.FC<Props> = ({ cols, data, renderers }) => (
  <div className="overflow-x-auto rounded-lg border border-[#DEE5ED]">
    <table className="table-auto w-full">
      <thead className="">
        <tr className="hover:bg-gray-50">
          {cols.map((col, index) => (
            <th key={index} className="text-sm px-4 text-center py-5 font-medium whitespace-nowrap text-blue-secondary border-b border-[#DEE5ED]">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="hover:bg-gray-50">
            {cols.map((col, index) => (
              <td key={index} className="px-4 py-5 whitespace-nowrap text-text-4 text-center">
                {renderers && renderers[col]
                  ? renderers[col](row[col], row)
                  : row[col]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
