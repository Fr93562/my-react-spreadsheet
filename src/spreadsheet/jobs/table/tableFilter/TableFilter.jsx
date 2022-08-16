// import table from '../../providers/table';
import Filter from '../../../materials/filter/Filter';
import { TableHeader, TableRow } from '../../../materials/global/table.styled';

function TableFilter(props) {
    const { structure, data } = props;
    const { columns } = structure;

    return (
       <TableHeader>
            <TableRow>
                {columns.map((column, index) => (
                    <Filter key={`tableFilter-${index}`} text={column.name} />
                ))}
            </TableRow>
       </TableHeader>
    );
}

export default TableFilter;
