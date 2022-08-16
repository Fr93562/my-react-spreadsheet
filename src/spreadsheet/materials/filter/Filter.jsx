import { TableParamCell } from '../global/table.styled';

function Filter(props) {
    const { text, action } = props;

    return (
        <TableParamCell>
            {text}
        </TableParamCell>
    );
}

export default Filter;
