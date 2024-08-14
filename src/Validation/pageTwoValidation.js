export const validateDetails = (
    companyName,
    ownerName,
    mailingAddress,
    companyPhone,
    gstNumber,
    panNumber,
    name,
    designation,
    email,
    phone,
    office,
    country,
    city,
    pincode,
    industry,
    webUrl,
    description,
) => {
    let errors = {};

    if (!companyName.trim()) {
        errors.companyName = "Company name is required, ";
    }

    if (!ownerName.trim()) {
        errors.ownerName = "Owner name is required, ";
    }

    if (!mailingAddress.trim()) {
        errors.mailingAddress = "Mailing address is required, ";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!companyPhone.trim()) {
        errors.companyPhone = "Company phone number is required, ";
    } else if (!phoneRegex.test(companyPhone)) {
        errors.companyPhone = "Company phone number is invalid, ";
    }

    if (!gstNumber.trim()) {
        errors.gstNumber = "GST number is required, ";
    }

    if (!panNumber.trim()) {
        errors.panNumber = "PAN number is required, ";
    }

    if (!name.trim()) {
        errors.name = "Contact person name is required, ";
    }

    if (!designation.trim()) {
        errors.designation = "Designation is required, ";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
        errors.email = "Email is required, ";
    } else if (!emailRegex.test(email)) {
        errors.email = "Email is invalid, ";
    }

    if (!phone.trim()) {
        errors.phone = "Contact person phone number is required, ";
    } else if (!phoneRegex.test(phone)) {
        errors.phone = "Contact person phone number is invalid, ";
    }

    if (!office.trim()) {
        errors.office = "Office name is required, ";
    }

    if (!country.trim()) {
        errors.country = "Country is required, ";
    }

    if (!city.trim()) {
        errors.city = "City is required, ";
    }

    if (!pincode.trim()) {
        errors.pincode = "Pincode is required, ";
    }

    if (!industry.trim()) {
        errors.industry = "Industry is required, ";
    }

    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!webUrl.trim()) {
        errors.webUrl = "Website URL is required, ";
    } else if (!urlRegex.test(webUrl)) {
        errors.webUrl = "Website URL is invalid, ";
    }

    if (!description.trim()) {
        errors.description = "Description is required, ";
    }

    return errors;
};