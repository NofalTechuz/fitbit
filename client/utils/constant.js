export const CONSTANT = {
  ACCESS_TOKEN: 'accessToken',
  USER_DETAILS: 'userDetails',
  MIN_PWD_LENGTH: 5,
  MAX_PWD_LENGTH: 25,
  MAX_NAME: 25,
  MIN_NAME: 3,
  MAX_PHONE_NUMBER_LENGTH: 10,
  MIN_ADDRESS: 10,
  MAX_ADDRESS: 50,
  MAX_PINCODE: 6,
  MAX_PAN_NUMBER: 10,
  MAX_GST_NUMBER: 15,
  SIGN_UP_SUCCESS: 'SignUp Success',
  SIGN_UP_ACTIVATION_LINK: 'Activation link sent to your email address. Please check and activate your account.',
  SOMETHING_WENT_WRONG: 'Something went wrong, Please retry again',
  SUBSCRIPTION_PLANS: {
    FREE: 'Free',
    MID: 'Mid',
    ENTERPRISE: 'Enterprise',
  },
  CONTACT_SALES: 'Please contact in sales for purchase Enterprise subscription!!!',
  PLAN_TYPE: {
    'Free': '1',
    'Paid': '2',
    'Enterprise': '3',
  },
  ENTERPRISE_PERCENTAGE: 1,
  RAZORPAY_CHECKOUT_SCRIPT: 'https://checkout.razorpay.com/v1/checkout.js',
  CANCEL_SUBSCRIPTION_HEADING: 'Cancel Subscription',
  CANCEL_SUBSCRIPTION_DESC: 'Are you sure you want to cancel the Mid plan?',
  DATE_FORMAT: 'MMM D, YYYY',
  LOGIN_FAILED: 'Invalid Credentials',
  SIGN_UP_FAILED: 'Account Creation Error',
  PROFILE_FAILED: 'User Profile Failed',
  PROFILE_UPDATE_SUCCESS: 'Profile Update Success',
  PROFILE_UPDATE_FAILED: 'Profile Update Failed',
  SUBSCRIPTION_FAILED: 'Subscription Failed',
  SUBSCRIPTION_SUCCESS: 'Subscription Success',
  FORGOT_PASSWORD: 'Forgot Password',
  RESET_PASSWORD: 'Reset Password',
  CHANGE_PASSWORD: 'Change Password',
  EMAIL_VERIFICATION: 'Email Verification',
  SUBSCRIPTION: 'Subscription',
  SUBSCRIPTION_INTERVAL: {
    DAILY: '1',
    WEEKLY: '2',
    MONTHLY: '3',
    QUARTERLY: '4',
    YEARLY: '5',
  },
  STATUS: {
    INACTIVE: '1',
    ACTIVE: '2',
  },
  PENDING_EMAIL_VERIFICATION: 'You did not verify your email. To access the feature please verify your email first.',
  RESPONSE_MESSAGE_TYPE: {
    SUCCESS: 'success',
    ERROR: 'error',
  },
};

export const REGEX = {
  NAME_VALIDATION_REGEX: /^[A-Za-z]+([ A-Za-z]([-']?[A-Za-z]+)*)+$/,
  PASSWORD_REGEX: /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%?=*&]).{5,25})$/,
  NUMBER_REGEX: /^[0-9]*$/,
  EMAIL_REGEX: /^[\w-.+]+@([\w-]+\.)+[a-zA-Z-]{2,4}$/,
  ALPHA_NUMERIC_REGEX: /^[a-zA-Z0-9]*$/,
  PHONE_REGEX: /^\+?[1-9]\d{10,}$/,
  PINCODE_REGEX: /^\d{4,6}$/,
  PAN_NUMBER_REGEX: /^[A-Z]{5}[0-9]{4}[A-Z]$/,
  GST_NUMBER_REGEX: /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[A-Z\d]{1}$/,
};

export const ROUTES = {
  HOME: '/',
  /* Admin Auth Routes */
  ADMIN_LOGIN: '/admin/login',
  ADMIN_SIGNUP: '/auth/admin/signup',
  ADMIN_FORGOT_PASSWORD: '/auth/admin/forgot-password',
  ADMIN_RESET_PASSWORD: '/auth/admin/reset-password',

  //   Admin Profile
  ADMIN_PROFILE: '/admin/home',

  /* User Auth Routes */
  USER_LOGIN: '/auth/user/login',
  USER_SIGNUP: '/auth/user/signup',
  USER_FORGOT_PASSWORD: '/auth/user/forgot-password',
  USER_RESET_PASSWORD: '/auth/user/reset-password',

  //   User Profile
  USER_PROFILE: '/user/profile',
};

export const VALIDATIONS = {
  FIRSTNAME_REQUIRED: 'Please enter first name',
  MAX_FIRSTNAME: `First name must be shorter than ${CONSTANT.MAX_NAME} characters`,
  MAX_LASTNAME: `Last name must be shorter than ${CONSTANT.MAX_NAME}  characters`,
  MAX_COMPANY_NAME: `Company name must be shorter than ${CONSTANT.MAX_NAME}  characters`,
  MAX_ADDRESS: `Address must be shorter than ${CONSTANT.MAX_ADDRESS}  characters`,
  MIN_FIRSTNAME: `First name must be longer than ${CONSTANT.MIN_NAME} characters`,
  MIN_LASTNAME: `Last name must be longer than ${CONSTANT.MIN_NAME} characters`,
  MIN_COMPANY_NAME: `Company name must be longer than ${CONSTANT.MIN_NAME} characters`,
  MIN_ADDRESS: `Address must be longer than ${CONSTANT.MIN_ADDRESS} characters`,
  MAX_PHONE: `Phone number must be ${CONSTANT.MAX_PHONE_NUMBER_LENGTH} characters longer`,
  LASTNAME_REQUIRED: 'Please enter last name',
  COMPANYNAME_REQUIRED: 'Please enter company name',
  EMAIL_REQUIRED: 'Please enter email address',
  PASSWORD_REQUIRED: 'Please enter password',
  CONFIRM_PASSWORD_REQUIRED: 'Please enter confirm password',
  TERMS_REQUIRED: 'Please accept terms and privacy policy',
  PASSWORD_NOT_MATCH: 'Password does not match, Please check',
  SAME_PASSWORD: 'Password and New Password must be different',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PASSWORD: 'Please enter valid password',
  INVALID_NAME: 'Please enter valid name',
  INVALID_NUMBER: 'Please enter numbers only',
  INVALID_PASSWORD_FORMAT: ' Password must contain at least one number, one uppercase and one special character',
  MIN_PASSWORD: `Min ${CONSTANT.MIN_PWD_LENGTH} characters `,
  MAX_PASSWORD: `Max ${CONSTANT.MAX_PWD_LENGTH} characters `,
  MANDATORY_FIELD: 'This field is required.',
  INVALID_ALPHA_NUMERIC_VALUE: 'Please enter alphanumeric values only.',
  INVALID_PHONE_NUMBER: 'Please enter valid phone number',
  STATE_REQUIRED: 'Please select state',
  CITY_REQUIRED: 'Please enter city',
  PINCODE_REQUIRED: 'Please enter pincode',
  ADDRESS_REQUIRED: 'Please enter address',
  PAN_NUMBER_REQUIRED: 'Please enter PAN number',
  GST_NUMBER_REQUIRED: 'Please enter GST number',
  INVALID_PINCODE: 'Please enter valid pincode',
  INVALID_PAN_NUMBER: 'Please enter valid PAN number',
  INVALID_GST_NUMBER: 'Please enter valid GST number',
  INVALID_COMPANY_NAME: 'Please enter valid company name',
};
