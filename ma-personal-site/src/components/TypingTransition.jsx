import { Waypoint } from "react-waypoint"
const TypingTransition = ({scrollState, navBarNameRef, setScrollState}) => {
    const text = 'function chunk(array, size = 1) { size = Math.max(toInteger(size), 0) const length = array == null ? 0 : array.length if (!length || size < 1) { return [] } let index = 0 let resIndex = 0 const result = new Array(Math.ceil(length / size)) while (index < length) { result[resIndex++] = slice(array, index, (index += size))} return result}'
    return (
        <div style={{ height: '100vh', paddingBottom: '30vh' }}>
            <div style={{ transform: `rotate(-10deg)` }}>
              <marquee scrollamount='60' width="60%" direction="right" height="50px">
                <p style={{ fontSize: '30px' }}>
                  {text}
                </p>
              </marquee>
              <marquee scrollamount='45' width="60%" direction="right" height="200px">
                <p style={{ fontSize: '150px' }}>
                {text}
                </p>
              </marquee>
              <Waypoint
            onEnter={() => {
              console.log('enter')
              if (scrollState !== 1) {
                navBarNameRef.current.toggleVisibility();
                navBarNameRef.current.nameRef.current.toggleVisibility()
                setScrollState(1);
              }
            }}
            onLeave={() => {
              if (scrollState !== 0) {
                navBarNameRef.current.toggleVisibility();
                navBarNameRef.current.nameRef.current.toggleVisibility()
                setScrollState(0);
              }
            }}
          />
              <marquee scrollamount='39' width="60%" direction="right" height="100px">
                <p style={{ fontSize: '80px' }}>
                {text}
                </p>
              </marquee>
            </div>
          </div>
    )
}

export default TypingTransition;