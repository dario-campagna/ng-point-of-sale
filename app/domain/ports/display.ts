import Money from "../money";

export default Display;

interface Display {

    showNotExists: (barCode:string) => void;

    showProductPrice: (money:Money) => void;

}