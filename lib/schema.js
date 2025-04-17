export const SCHEMA__DummyMenu = {
  title: "Header",
  _originalId: "1d800887-ce2d-4a02-8c16-5e4f6bc2675c",
  _updatedAt: "2024-08-31T00:11:29Z",
  items: [
    {
      _key: "d1ecc52f07b6",
      title: "Explore",
      _type: "link_list",
      destination: "/explore",
    },
    {
      _type: "link_list",
      destination: "/upload",
      _key: "a3fd00ca0cca33f99124c385ea2ca1e6",
      title: "Upload",
    },
  ],
};

export const SCHEMA__LoginForm = [
  {
    name: `email`,
    label: `Email Address`,
    placeholder: `Email Address`,
    width: 100,
    type: "email",
    required: {
      value: true,
      message: `Must enter a valid email`,
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: `Must enter a valid email`,
    },
  },
];

export const SCHEMA__SignupForm = [
  {
    name: `first_name`,
    label: `First Name`,
    placeholder: `First Name`,
    width: 50,
    type: "text",
    pattern: {
      value: /^[a-zA-Z]+$/,
      message: `Must only be alphabets`,
    },
    required: {
      value: true,
      message: `This field is required`,
    },
  },
  {
    name: `last_name`,
    label: `Last Name`,
    placeholder: `Last Name`,
    width: 50,
    type: "text",
    pattern: {
      value: /^[a-zA-Z]+$/,
      message: `Must only be alphabets`,
    },
    required: {
      value: true,
      message: `This field is required`,
    },
  },
  {
    name: `email`,
    label: `Email Address`,
    placeholder: `Email Address`,
    width: 100,
    type: "email",
    required: {
      value: true,
      message: `Must enter a valid email`,
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: `Must enter a valid email`,
    },
  },
  {
    name: `username_handle`,
    label: `Username Handle`,
    placeholder: `Username Handle`,
    width: 100,
    type: "text",
    required: {
      value: true,
      message: `This field is required`,
    },
    pattern: {
      value: /^[a-zA-Z0-9_-]+$/,
      message: `Must be alphanumeric`,
    },
  },
];

export const SCHEMA__ProfileForm = [
  {
    name: `first_name`,
    label: `First Name`,
    placeholder: `First Name`,
    width: 50,
    type: "text",
    pattern: {
      value: /^[a-zA-Z]+$/,
      message: `Must only be alphabets`,
    },
    required: {
      value: true,
      message: `This field is required`,
    },
  },
  {
    name: `last_name`,
    label: `Last Name`,
    placeholder: `Last Name`,
    width: 50,
    type: "text",
    pattern: {
      value: /^[a-zA-Z]+$/,
      message: `Must only be alphabets`,
    },
    required: {
      value: true,
      message: `This field is required`,
    },
  },
  {
    name: `short_bio`,
    label: `Short Bio`,
    placeholder: ``,
    width: 100,
    type: "textarea",
    pattern: {
      value: /^[\s\S]{0,130}$/,
      message: `Must be less than 130 characters`,
    },
  },
  {
    name: `city`,
    label: `City`,
    placeholder: ``,
    width: 50,
    type: "text",
    pattern: {
      value: /^[a-zA-Z\s]+$/,
      message: `Must only be alphabets`,
    },
  },
  {
    name: `country`,
    label: `Country`,
    placeholder: ``,
    width: 50,
    type: "text",
    pattern: {
      value: /^[a-zA-Z\s]+$/,
      message: `Must only be alphabets`,
    },
  },
  {
    name: `website`,
    label: `Website`,
    placeholder: ``,
    width: 100,
    type: "text",
    pattern: {
      value: /^(https?:\/\/)?([\w-]+\.)+[a-z]{2,6}(:\d+)?(\/\S*)?$/i,
      message: `Must be a valid link`,
    },
  },
];

export const SCHEMA__EditorPanel__BasicDetails = [
  {
    name: `first_name`,
    label: `First Name`,
    placeholder: `John`,
    width: 100,
    type: `textarea`,
  },
  {
    name: `last_name`,
    label: `Last Name`,
    placeholder: `Doe`,
    width: 100,
    type: `textarea`,
  },
];
