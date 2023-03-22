import logo from '../../assets/logo.svg';
import { Modal } from '../Modal';

import { HeaderContainer } from './styles';

export function Header() {
    return (
        <HeaderContainer>
            <div>
                <img src={logo} alt="" />

                <Modal>
                    <button type="button"> Nova transação </button>
                </Modal>
            </div>
        </HeaderContainer>
    );
}