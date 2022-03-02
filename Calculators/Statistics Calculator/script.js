(() => {
    let calculateBtn = document.getElementById("btn-calculate"),
        clearBtn = document.getElementById("btn-clear"),
        dataInput = document.getElementById("data"),
        outputContinaer = document.getElementById("output");

    function traverse(array, cb) {
        let ans = array[0];
        for (let i = 1; i < array.length; i++) {
            if (cb(ans, array[i])) {
                ans = array[i];
            }
        }
        return ans;
    }
    function median(data) {
        var median = 0,
            numsLen = data.length;
        data.sort();

        if (numsLen % 2 === 0) {
            median = (data[numsLen / 2 - 1] + data[numsLen / 2]) / 2;
        } else {
            median = data[(numsLen - 1) / 2];
        }
        return median;
    }
    function mode(data) {
        var modes = [],
            count = {},
            i,
            maxIndex = 0;

        for (i = 0; i < data.length; i += 1) {
            count[data[i]] = (count[data[i]] || 0) + 1;
            if (count[data[i]] > maxIndex) {
                maxIndex = count[data[i]];
            }
        }

        for (i in count)
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }

        return modes;
    }
    function variance(data) {
        let sum = [].reduce.call(data, (prevVal, nextVal) => prevVal + nextVal, 0);
        let mean = sum / data.length;
        let _var = data.map((num) => (num - mean) ** 2).reduce((prev, next) => prev + next, 0) / data.length;
        return _var;
    }

    calculateBtn.addEventListener("click", (event) => {
        try {
            let data = dataInput.value.split(", ").map((word) => parseFloat(word.trim(" ")));
            let _sum = [].reduce.call(data, (prevVal, nextVal) => prevVal + nextVal, 0);
            let _min = traverse(data, (prev, next) => prev > next);
            let _max = traverse(data, (prev, next) => prev < next);
            let _count = data.length;
            let _mean = _sum / _count;
            let _var = variance(data);
            let _std = Math.sqrt(_var);
            let _median = median(data);
            let _mode = mode(data);
            console.log(`_sum: ${_sum}, _min: ${_min}, _max: ${_max}`);
            console.log(`_mean: ${_mean}, Median: ${_min}, _max: ${_max}`);
            console.log(`_var: ${_var}, _median: ${_median}, _mode: ${_mode}, _std: ${_std}`);
            const table = `<table class="table table-bordered table-dark">
                <thead>
                    <tr>
                        <th scope="col">Statistics Name</th>
                        <th scope="col">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Minimum</td>
                        <td>${_min}</td>
                    </tr>
                    <tr>
                        <td>Maximum</td>
                        <td>${_max}</td>
                    </tr>
                    <tr>
                        <td>Sum</td>
                        <td>${_sum}</td>
                    </tr>
                    <tr>
                        <td>Count</td>
                        <td>${_count}</td>
                    </tr>
                    <tr>
                        <td>Mean</td>
                        <td>${_mean}</td>
                    </tr>
                    <tr>
                        <td>Median</td>
                        <td>${_median}</td>
                    </tr>
                    <tr>
                        <td>Mode</td>
                        <td>${JSON.stringify(_mode)}</td>
                    </tr>
                    <tr>
                        <td>Std Deviation</td>
                        <td>${_std}</td>
                    </tr>
                    <tr>
                        <td>Variance</td>
                        <td>${_var}</td>
                    </tr>
                </tbody>
            </table>`;
            outputContinaer.innerHTML = table;
        } catch {
            alert("error while parsing");
        }
    });
    clearBtn.addEventListener("click", (event) => {
        dataInput.value = "";
        outputContinaer.innerHTML = "";
    });
})();
