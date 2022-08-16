// import table from '../../providers/table';
import TableFilter from './tableFilter/TableFilter';
import TableLine from './tableLine/TableLine';
import { TableContainer } from '../../materials/global/table.styled';

function Table(props) {
    const { structure, data, limit } = props;
    
    return (
       <>
            <TableContainer>
                <TableFilter structure={structure} data={data} />
                <TableLine structure={structure} data={data} />
            </TableContainer>
       </>
    );
}

export default Table;
