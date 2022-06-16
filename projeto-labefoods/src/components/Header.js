function Header(props) {
  const showHeader = () => {
    switch (props.currentPage) {
      case "home":
        return <h3>Rappi4</h3>;
      case "cart":
        return <h3>Meu carrinho</h3>;
      case "details":
        return <h3>Restaurante</h3>;
      case "address":
        return <h3>Meu endereço</h3>;
      case "edit-address":
        return <h3>Editar endereço</h3>;
      case "profile":
        return <h3>Meu perfil</h3>;
      case "edit-profile":
        return <h3>Editar perfil</h3>;
      default:
        return <h3>Rappi4</h3>;
    }
  };

  return <>{showHeader()}</>;
}

export default Header;
