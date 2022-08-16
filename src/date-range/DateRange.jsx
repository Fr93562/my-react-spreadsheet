import React from 'react';
import Form from './jobs/form/Form';
import Calendar from './jobs/calendar/Calendar';
import Background from './materials/background/Background';
import action from './provider/action';
import { Container } from './DateRange.styled';

/**
 * @author: François Macko
 *
 * Point d'entrée du composant dateRange
 * Cette classe gère l'affichage de l'input du formulaire et du calendrier
 * Il stocke les dates et leurs setters
 * Il contrôle également la plupart des actions au clavier
 *
 * @requires - submitRange / function: fonction à appeler à la soumission du formulaire
 * @requires - onOpen / function: fonction à appeler au moment de l'ouverture de la popin
 * @param - rangeStart / date: state qui corresponds à la date de départ
 * @param - rangeEnd / date: state qui corresponds à la date de fin
 */
class DateRange extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            dateStart: '',
            dateEnd: '',
            open: false,
        };
    }

    /**
     * Gère l'affichage du calendrier via le state open
     */
    handleAction = () => {
        const { open } = this.state;
        const { onOpen } = this.props;

        if (!open) {
            onOpen();
            this.resetDate();
        }

        this.setState({ open: !open });
    }

    /**
    * Gère l'ouverture du calendrier via la touche Enter
    * @param {*} event - object / js event
    */
    handleOpen = (event) => {
        const { open } = this.state;

        if (!open && action.keyPress(event, 'Enter')) {
            this.handleAction();
        }
    }

    /**
     * Gère la fermeture du calendrier via la touche echapp
     * @param {*} event - object / js event
     */
    handleEchapp = (event) => {
        event.stopPropagation();
        const { open } = this.state;

        if (open && action.keyPress(event, 'Escape')) {
            this.handleAction();
        }
    }

    /**
     * Mets à jour le state de la date de début
     * @param {*} date - date: date de début
     */
    setDateStart = (date) => {
        this.setState({
            dateStart: date,
        });
    }

    /**
     * Mets à jour le state de la date de fin
     * @param {*} date - date: date de début
     */
    setDateEnd = (date) => {
        this.setState({
            dateEnd: date,
        });
    }

    /**
     * Mets à jour les setters en fonction de la valeur du paramètre
     * S'il n'y a pas de valeur alors dateStart utilisera la date d'entrée
     * S'il y a une valeur date de début. Si la date d'entrée est plus faible. Alors la date de début sera mis à jour
     * Si la date d'entrée est plus forte. Alors la date de fin sera mis à jour
     *
     * @param {*} date - date: valeur à utiliser pour le setter
     */
    setDate = (date) => {
        const { dateStart, dateEnd } = this.state;

        if (!dateStart) {
            this.setDateStart(date);
        } else if (dateStart && dateEnd) {
            this.setDateStart(date);
            this.setDateEnd('');
        } else if (dateStart) {
            const oldDateStart = new Date(dateStart);
            const newDateStart = new Date(date);

            if (oldDateStart <= newDateStart) {
                this.setDateEnd(date);
            } else {
                this.setDateStart(date);
            }
        }
    }

    /**
     * Appelée lors de la soumission du calendrier
     */
    submitDate = () => {
        const { submitRange } = this.props;
        const { dateStart, dateEnd } = this.state;

        submitRange(dateStart, dateEnd);
        this.handleAction();
    }

    /**
     * Réinitialise la date de début et la date de fin
     */
    resetDate = () => {
        this.setDateStart('');
        this.setDateEnd('');
    }

    /**
     * Cette fonction est utilisée par les composants UI
     * Détermine l'input à mettre en surbrillance par rapport aux dates actuelles
     *
     * @returns - string: position du bloc à mettre en surbrillance
     */
    getHighlight = () => {
        const { dateStart } = this.state;
        let highlight = '';

        if (!dateStart) {
            highlight = 'left';
        }

        if (dateStart) {
            highlight = 'right';
        }
        return highlight;
    }

    render() {
        const { dateStart, dateEnd, open } = this.state;
        const { rangeStart, rangeEnd } = this.props;

        window.addEventListener('keydown', this.handleEchapp);

        return (
            <Container>
                <Form
                    action={this.handleAction}
                    handleOpen={this.handleOpen}
                    dateStart={rangeStart}
                    dateEnd={rangeEnd}
                />
                {open && (
                    <>
                        <Calendar
                            setDate={this.setDate}
                            submitDate={this.submitDate}
                            resetDate={this.resetDate}
                            dateStart={dateStart}
                            dateEnd={dateEnd}
                            highlight={this.getHighlight()}
                        />
                        <Background action={this.handleAction} />
                    </>
                )}
            </Container>
        );
    }
}

export default DateRange;
