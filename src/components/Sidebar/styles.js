import styled from '@emotion/styled';

export const SidebarContainer = styled.div`
    width: ${(p) => (p.isSidebarOpen ? '20%' : '5%')};
    max-width: 28rem;
    min-width: 8rem;
    background-image: linear-gradient(315deg, rgba(252, 82, 150, 0.8) 0%, rgba(246, 112, 98, 0.8) 74%),
        url(${(p) => p.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color: #fff;
    position: relative; //toggler container
    transition: all ease-in-out 0.2s;
`;

export const SidebarHeader = styled.h3`
    padding: 2rem 0;
    text-align: center;
    letter-spacing: 0.6rem;
    font-size: 2rem;
    font-family: ${(p) => p.font};
`;

export const MenuItemsContainer = styled.div``;

export const MenuItemBox = styled.div`
    padding: 0.6rem 2rem;
`;

export const MenuItem = styled.div`
    font-family: ${(p) => p.font};
    /* display: flex; */
    color: ${(p) => (p.selected ? '#fff' : 'rgba(19, 15, 64)')};
    /* align-items: center; */
    /* flex-wrap: nowrap; */
    position: relative; //align center text

    white-space: nowrap;
    ${(p) => !p.isSidebarOpen && `text-align: center;`}
    cursor: pointer;

    &:hover {
        color: #fff;
        transition: color 0.2s ease-in;
    }

    &::after {
        content: '';
        display: block;
        height: 0.4rem;
        background: ${(p) => (p.selected ? '#fff' : 'rgba(255, 112, 85)')};
        margin: 0.4rem 0 0.4rem;
        /* width: 100%; */
        /* flex-basis: 100%; */
        transform: ${(p) => (p.selected ? 'scale(1, 1)' : 'scale(0, 1)')};
        transform-origin: 0% 100%;
        transition: transform 0.5s ease;
    }

    &:hover::after {
        transform: scale(1, 1);
    }

    &::before {
        content: '';
        display: block;
        height: 0.4rem;
        background: #fff;
        margin: 0.4rem 0 0.4rem;
        /* flex-basis: 100%; */
        transform: scale(0, 1);
        transform-origin: 100% 0%;
        transition: transform 0.5s ease;
    }

    ${(p) =>
        p.selected &&
        `
        &::before {
            transform: scale(1, 1);
        }
    `};

    & > svg {
        ${(p) => p.isSidebarOpen && `padding-right: 2rem; transition: 0.4s ease-in padding-right;`}
    }
`;

export const Text = styled.p`
    display: ${(p) => (p.isSidebarOpen ? 'inline' : 'none')};
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 0.4rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;

export const DropdownIcon = styled.span`
    position: absolute;
    top: 1.2rem;
    right: 0;
    padding: 0.4rem;
    border: solid ${(p) => p.selected && `#fff`};
    border-width: 0 1px 1px 0;
    transform: rotate(45deg);
`;

export const TogglerContainer = styled.div`
    position: absolute;
    width: 30%;
    bottom: 10%;
    left: 0;
    right: 0;
    margin: 0 auto;
`;

export const Toggler = styled.div`
    height: 3rem;
    cursor: pointer;
    /* border: solid #000 1px; */
    position: relative; // lines toggle

    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0.4em;
        height: 0.3em;
        width: 100%;
        background: #fff;
        box-shadow: 0 0.75em 0 0 #fff, 0 1.5em 0 0 #fff;
    }
`;
