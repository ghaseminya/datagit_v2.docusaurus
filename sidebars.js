module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'introduction'
    },
    {
      type: "category",
      label: "پایتون",
      items: [
        {
          type: 'ref',
          id: 'python/introduction'
        },
        {
          type: "category",
          label: "آموزش مقدماتی",
          items: [
            {
              type: 'ref',
              id: 'python/beginner/introduction'
            },
            {
              type: "category",
              label: "کیلومترِ صفر",
              items: [
                {
                  type: 'ref',
                  id: 'python/beginner/km_zero/python_installation'
                },
                {
                  type: 'ref',
                  id: 'python/beginner/km_zero/anaconda_installation'
                },
                {
                  type: 'ref',
                  id: 'python/beginner/km_zero/jupyter_installation'
                }
              ],
            },
            {
              type: "category",
              label: "مقدمه",
              items: [
                {
                  type: 'ref',
                  id: 'python/beginner/introduction/variables'
                },
                {
                  type: 'ref',
                  id: 'python/beginner/introduction/local_global_variables'
                }
              ],
            },
            {
              type: "category",
              label: "توابع",
              items: [
                {
                  type: 'ref',
                  id: 'python/beginner/functions/function'
                },
                {
                  type: 'ref',
                  id: 'python/beginner/functions/useful_functions'
                }
              ],
            },
            {
              type: "category",
              label: "انواع داده",
              items: [
                {
                  type: 'ref',
                  id: 'python/beginner/data_types/string'
                },
                {
                  type: 'ref',
                  id: 'python/beginner/data_types/list'
                },
                {
                  type: 'ref',
                  id: 'python/beginner/data_types/tuple'
                },
                {
                  type: 'ref',
                  id: 'python/beginner/data_types/set'
                },
                {
                  type: 'ref',
                  id: 'python/beginner/data_types/dictionary'
                }
              ],
            },
            {
              type: "category",
              label: "توابع شرطی و حلقه های تکرار",
              items: [
                {
                  type: 'ref',
                  id: 'python/beginner/flow_control/for_while'
                },
                {
                  type: 'ref',
                  id: 'python/beginner/flow_control/if_else'
                }
              ],
            },
            {
              type: 'ref',
              id: 'python/beginner/indent'
            }
          ],
        },
      ]
    },
    {
      type: "category",
      label: "گیت",
      items: [
        {
          type: 'ref',
          id: 'git/introduction'
        },
        {
          type: "category",
          label: "آموزش مقدماتی",
          items: [
            {
              type: 'ref',
              id: "git/beginner/introduction"
            },
            {
              type: "category",
              label: "کیلومترِ صفر",
              items: [
                {
                  type: 'ref',
                  id: "git/beginner/km_zero/git_installation"
                }
              ],
            }
          ]
        },
      ]
    },
    // {
    //   type: 'ref',
    //   id: 'ml/introduction'
    // },
    // {
    //   type: 'ref',
    //   id: 'db/introduction'
    // },
    // {
    //   type: 'ref',
    //   id: 'r/introduction'
    // },
  ],
  python: [
    {
      type: 'doc',
      id: 'introduction'
    },
    {
      type: 'doc',
      id: 'python/introduction'
    },
    {
      type: "category",
      label: "آموزش مقدماتی",
      collapsed: false,
      items: [
        "python/beginner/introduction",
        {
          type: "category",
          label: "کیلومترِ صفر",
          items: [
            "python/beginner/km_zero/python_installation",
            "python/beginner/km_zero/anaconda_installation",
            "python/beginner/km_zero/jupyter_installation"
          ],
        },
        {
          type: "category",
          label: "مقدمه",
          items: [
            "python/beginner/introduction/variables",
            "python/beginner/introduction/local_global_variables"
          ],
        },
        {
          type: "category",
          label: "توابع",
          items: [
            "python/beginner/functions/function",
            "python/beginner/functions/useful_functions"
          ],
        },
        {
          type: "category",
          label: "انواع داده",
          items: [
            "python/beginner/data_types/string",
            "python/beginner/data_types/list",
            "python/beginner/data_types/tuple",
            "python/beginner/data_types/set",
            "python/beginner/data_types/dictionary",
          ],
        },
        {
          type: "category",
          label: "توابع شرطی و حلقه های تکرار",
          items: [
            "python/beginner/flow_control/for_while",
            "python/beginner/flow_control/if_else"
          ],
        },
        "python/beginner/indent",
      ],
    },
  ],
  git: [
    {
      type: 'doc',
      id: 'introduction'
    },
    {
      type: 'doc',
      id: 'git/introduction'
    },
    {
      type: "category",
      label: "آموزش مقدماتی",
      collapsed: false,
      items: [
        "git/beginner/introduction",
        {
          type: "category",
          label: "کیلومترِ صفر",
          items: [
            "git/beginner/km_zero/git_installation"
          ],
        }
      ]
    },
  ],
  // r: [
  //   {
  //     type: 'doc',
  //     id: 'r/introduction'
  //   },
  //   {
  //     type: "category",
  //     label: "آموزش مقدماتی",
  //     collapsed: false,
  //     items: [
  //       "r/beginner/introduction",
  //       // {
  //       //   type: "category",
  //       //   label: "کیلومترِ صفر",
  //       //   items: [
  //       //     "r/beginner/km_zero/git_installation"
  //       //   ],
  //       // }
  //     ]
  //   },
  // ]
};
