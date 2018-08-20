import isUrl = require('is-url');

export const requiredFieldError = (value?: string) => {
    return value && value.trim() ? undefined : 'Please fill in this field';
};

export const requiredFieldSuccess = (value?: string) => {
    return value && value.trim() ? "Success! You've done it." : undefined;
};

export const urlFieldError = (value?: string) => {
    return !value || (value && isUrl(value)) ? undefined : 'Please enter valid URL.';
};

export const githubUrlFieldError = (value?: string) => {
    return !value || (value && isUrl(value) && value.match(/github/i)) ? undefined : 'Please enter URL to Github repo.';
};
