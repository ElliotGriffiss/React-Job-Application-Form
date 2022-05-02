import {default as Introduction} from './introduction';
import {default as PersonalDetails } from './personalDetails';
import {default as EmploymentHistory} from './employmentHistory';
import {default as Education} from './education';
import {default as PersonalStatement} from './personalStatement';
import {default as Confirmation} from './confirmation';

const FormRoutes = [
    {
      PageTitle: "Introduction",
      Path: "/",
      Component: <Introduction />,
    },
    {
      PageTitle: "Personal Details",
      Path: "/personal-details",
      Component: <PersonalDetails />,
    },
    {
      PageTitle: "Employment History",
      Path: "/employment-history",
      Component: <EmploymentHistory />,
    },
    {
      PageTitle: "Personal Statement",
      Path: "/personal-statement",
      Component: <PersonalStatement />,
    },
    {
      PageTitle: "Confirmation",
      Path: "/confirmation",
      Component: <Confirmation />,
    },
  ];

export {FormRoutes};