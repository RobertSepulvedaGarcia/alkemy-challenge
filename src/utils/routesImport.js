import home from "../pages/home/home";
import form from "../pages/form/form";
import tableOperationList from "../pages/tableOperationsList/tableOperationsList";

export const routes = [{
        path: "/",
        component: home,
    },
    {
        path: "/form",
        component: form,
    },
    {
        path: "/table",
        component: tableOperationList,
    },
];