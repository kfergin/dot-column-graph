export const getRange = (values) => {
    let {max, min} = values.reduce((obj, val) => {
        if (obj.min == null) return {min: val, max: val};
        if (val > obj.min) {
            if (val > obj.max) return {...obj, max: val};
            return obj;
        }
        return {...obj, min: val};
    }, {min: null, max: null});
    return max-min;
}

export const hexToRgb = (hex, a) => {
    let result = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return;
    let rgb = `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`;
    if (a) {
    	return `rgba(${rgb},${a})`;
    }
    return `rgb(${rgb})`;
}

export const genData = (columns, points, min, max) => {
    return Array.apply(null, {length: columns}).map((_, i) => ({
        name: 'Label #' + (i+1),
        values: Array.apply(null, {length: points}).map(() => Math.random() * (max - min) + min)
    }));
}