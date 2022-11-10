class Validate {
  addRequest(req) {
    if (!req?.body?.productName) throw new Error('Field productName is missing.');
    if (req?.body?.productName?.length < 10) throw new Error('Field productName must have at least 10 characters.');
  }

  deleteRequest(req) {
    if (!req?.body?.id) throw new Error('Field id is missing.');
    if (req?.body?.id?.length < 10) throw new Error('Field id must have at least 10 characters.');
  }

  searchRequest(req) {
    if (!req?.body?.searchTerm) throw new Error('Field searchTerm missing.');
    if (req?.body?.searchTerm?.length < 3) throw new Error('Field searchTerm must have at least 3 characters.');
    // date validation
  }
}

module.exports = Validate;
