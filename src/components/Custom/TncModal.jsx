import styled from 'styled-components';

const Modal = styled.div`
    width: 438px;
    max-height: 569px;
    overflow-y: scroll;
    overflow-x: hidden;
    background: #151821;
    color: #E1AB46;
    padding: 30px;
    // border-radius: 15px;
    ::-webkit-scrollbar {
        display: none;
    }
`
const List = styled.ol`
    li {
        padding: 10px 0;
    }
`

const TncModal = () => {
    return ( 
            <Modal>
                <div>
                    <h4>Terms & Conditions</h4>
                    <List>
                        <li>
                            The promotion is available to all customers who are eligible to receive promotions across WestCasino. 
                        </li>
                        <li>The tournament will run from January 15th, 15:00 GMT until January 17th, 23:59 GMT. </li>
                        <li>
                            To be eligible for this promotion, a player must opt-in via one of the participating games, 
                            place a real-money bet on a participating game and wager at least €0.5 on a participating game during the promotional period.
                        </li>
                        <li>Players can opt-in starting from January 14th, 12:00:00 GMT. </li>
                        <li>Participating Games: Legacy of Dead – Play’N GO, Money Train 2 - Relax Gaming, Ring of Odin – Play’N GO, Wolf Gold™- Pragmatic Play. </li>
                        <li>All spins with a minimum bet of €0.50 (or the equivalent amount in Available Currencies) in the Qualifying Games will qualify for the tournament. </li>
                        <li>The leaderboard may update with a delay of up to one hour than the actual game time. </li>
                        <li>The winners will be credited with their prizes on January 18th, between 12:00:00 and 23:59:59 GMT. </li>
                        <li>All prizes will carry standard wagering requirements. </li>
                        <li>Any real-money bet with the required minimum bet value placed on the participating games during the Promotion will qualify for the promotion. </li>
                        <li>A player rank in the leaderboard will be determined by the highest value of bets made on the participating games. </li>
                        <li>Each player can win only 1 (one) prize. </li>
                        <li>WestCasino reserves the right to cancel or modify the promotion at any time. </li>
                        <li>General Terms and Conditions apply.</li>
                    </List>
                </div>
            </Modal>
    );
}
 
export default TncModal;