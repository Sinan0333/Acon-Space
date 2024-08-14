export function validateDocuments({ gstNumber, panNumber, tanNumber, Agreement }) {
    const errors = {};

    if (!gstNumber) {
        errors.gstNumber = "GST number file is required.";
    }

    if (!panNumber) {
        errors.panNumber = "PAN number file is required.";
    }

    if (!tanNumber) {
        errors.tanNumber = "TAN number file is required.";
    }

    if (!Agreement) {
        errors.Agreement = "Agreement document is required.";
    }


    return errors
}
