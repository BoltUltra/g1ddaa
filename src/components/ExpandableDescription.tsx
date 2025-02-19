import { useState } from "react";

const ExpandableDescription = ({ description }: { description: string }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const maxLength = 150;

  if (description.length <= maxLength) {
    return (
      <div className="space-y-2 md:col-span-2">
        <p className="font-bold uppercase">Description</p>
        <p>{description}</p>
      </div>
    );
  }

  return (
    <div className="space-y-2 md:col-span-2">
      <p className="font-bold uppercase">Description</p>
      <p>
        {showFullDescription
          ? description
          : `${description.substring(0, maxLength)}...`}
        <button
          onClick={() => setShowFullDescription(!showFullDescription)}
          className="text-primary underline ml-2"
        >
          {showFullDescription ? "Read less" : "Read more"}
        </button>
      </p>
    </div>
  );
};

export default ExpandableDescription;
