import { Tag, TagProps } from 'antd';
import { useState } from 'react';
import './ATag.scss';
import clsx from 'clsx';

interface IATag extends TagProps {
  tagsData: string[];
}

const ATag = ({ tagsData }: IATag) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const classAntd = clsx('a-tag');

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    // console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <div className={classAntd}>
      {tagsData.map((tag, index) => (
        <Tag.CheckableTag
          key={index}
          checked={selectedTags.includes(tag)}
          onChange={(checked) => handleChange(tag, checked)}
        >
          {tag}
        </Tag.CheckableTag>
      ))}
    </div>
  );
};

export default ATag;
