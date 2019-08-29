import React from 'react';

class Dropdown extends React.Component {

    state = {
        displayMenu: false
    }

    showDropdownMenu = (event) => {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu = () => {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }

    render() {
        const { displayMenu } = this.state
        const { children, title, mobile } = this.props
        let dropdownClass = 'dropdown'
        if(mobile) dropdownClass = 'dropdown dropdown--mobile'
        return (
            <div className={dropdownClass}>
                <a className="button" onClick={this.showDropdownMenu}>{title}</a>
                { displayMenu && children }
            </div>

        );
    }
}

export default Dropdown;