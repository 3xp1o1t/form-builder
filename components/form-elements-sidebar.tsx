import { FormElements } from './form-elements';
import SidebarBtnElement from './sidebar-btn-element';

function FormElementsSidebar() {
  return (
    <div>
      Elements
      <SidebarBtnElement formElement={FormElements.TextField} />
    </div>
  );
}

export default FormElementsSidebar;
