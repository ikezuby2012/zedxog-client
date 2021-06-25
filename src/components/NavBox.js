import React from 'react';

const navBox = () => {
    return (
        <div className="navigation-box">
            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__items"><a href="#" class="navigation__link">home</a></li>
                    <li class="navigation__items"><a href="#services" class="navigation__link">services</a></li>
                    <li class="navigation__items"><a href="#case" class="navigation__link">case study</a></li>
                    <li class="navigation__items"><a href="#hire" class="navigation__link">hire us</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default navBox;