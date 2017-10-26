function transform(context, params, content)
{
  let val = content.root.document.wktBounds
  let new_doc =
  {
    "data": {
      "geospatial": {
        "wkt_polygon" : {
          val
        }
      }
    }
  };
  return new_doc;
};

exports.transform = transform;
