import React from 'react';
import configFilter from './configs/configFilter';
import table from './providers/table';
import Table from './jobs/table/Table';
import { Container } from './Spreadsheet.styled';

class DateRange extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            data: [],
            action: false,
            filter: configFilter.unset,
            page: 0,
        };
    }

    componentDidMount() {
        this.initData();
    }

    componentDidUpdate() {
        this.disableFilter();
    }

    // setters

   /**
    * Mets à jour le state des données
    * @param {array} data 
    */
    setData(data) {
        this.setState({ data });
    }

    /**
     * Mets à jour le state pour afficher les différentes actions
     * @param {boolean} action 
     */
    setAction(action) {
        this.setState({ action });
    }

    /**
     * Mets à jour le state en cas de filtre actif
     * @param {boolean} filter 
     */
    setFilter(filter) {
        this.setState({ filter });
    }

    /**
     * Mets à jour le state des pages
     * @param {integer} page 
     */
    setPage(page) {
        this.setState({ page });
    }

    // méthodes métiers

    /**
    * Charge les données au chargement du composant
    */
    initData() {
        const { structure, source } = this.props;
        const data = table.addFilter(structure, source);

        this.setData(data);
    }

    /**
     * Mise à jour du tableau en cas de tri activé
     * @param {array} data 
     */
    updateData(data, filter) {
        this.setData(data);
        this.setFilter(filter);
    }

    /**
     * Mets à jour les données lorsque les données d'origine sont modifiées
     */
    campareData() {
        const { data } = this.props;
        const { origin } = this.state;

        if (data.length > origin.length) {
            // TODO: à développer
            this.initData();
        }
    }

    /**
     * En cas de désactivation du filtre, recharge les données d'origine
     */
    disableFilter() {
        const { filter } = this.props;

        if (filter === configFilter.unset) {
            this.initData();
            this.setFilter(configFilter.unset);
        }
    }

    render() {
        const { data } = this.state;
        const { structure, limit } = this.props;

        console.warn('Debug de la classe', data, structure, limit);

        return (
            <Container>
                <Table structure={structure} data={data} limit={limit} />
            </Container>
        );
    }
}

export default DateRange;
