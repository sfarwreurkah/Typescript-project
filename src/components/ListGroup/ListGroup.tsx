import { useState } from 'react';
import styles from './ListGroup.module.css';
import styled from 'styled-components';


const List =  styled.ul`

    list-style-type: none;
    padding: 0;
    margin: 0;
`;

interface ListItemProps {
  active: boolean;
}


const ListItem = styled.li <ListItemProps>`
    padding: 5px 0;
    background: ${Props => Props.active ? 'blue' : 'none' }
`


interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p> no item found </p>}
      <List className={styles.listGroup}>
        {items.map((item, index) => (
          <ListItem 
          active= {index === selectedIndex}
            // className={
            //   selectedIndex === index
            //     ? `${styles.listGroupItem} ${styles.active}`
            //     : styles.listGroupItem
            // }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;