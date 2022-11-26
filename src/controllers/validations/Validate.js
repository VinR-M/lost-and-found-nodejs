class Validate {
  addRequest(req) {
    if (!req?.body?.type) throw new Error('Field type is missing.');
    if (req?.body?.type?.length < 5) throw new Error('Field type must have at least 10 characters.');
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
