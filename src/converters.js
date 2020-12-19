export default {
    base64: {
        label: 'Base64',
        encode: (val) => btoa(val),
        decode: (val) => atob(val),
    },
    encodeURIComponent: {
        label: 'encodeURIComponent',
        encode: val => encodeURIComponent(val),
        decode: val => decodeURIComponent(val),
    },
    encodeURI: {
        label: 'encodeURI',
        encode: val => encodeURI(val),
        decode: val => decodeURI(val),
    }
}