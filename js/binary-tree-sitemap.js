import '@styles/tree.css';
import '../styles/sitemap.css';

const getTreeData = () => {
  return {
    element: 'test',
    left: {
      element: 'test12',
      left: {
        element: 'test122',
      },
      right: {
        element: 'test123',
      },
    },
    right: {
      element: 'test13',
      left: {
        element: 'test132',
        left: {
          element: 'test1321',
          left: {
            element: 'test13211',
          },
        },
      },
      right: {
        element: 'test133',
        left: {
          element: 'test1332',
        },
        right: {
          element: 'test1333',
          left: {
            element: 'test1321',
            left: {
              element: 'test13211',
            },
          },
          right: {
            element: 'test1321',
            right: {
              element: 'test13211',
            },
          },
        },
      },
    },
  };
};
const main = () => {



}

main();