/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
export const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_signuporsignin",
        editProfile: "B2C_1_profileediting"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://shiliadb2c.b2clogin.com/shiliadb2c.onmicrosoft.com/B2C_1_signuporsignin",
        },
        editProfile: {
            authority: "https://shiliadb2c.b2clogin.com/shiliadb2c.onmicrosoft.com/B2C_1_profileediting"
        }
    },
    authorityDomain: "shiliadb2c.b2clogin.com"
}