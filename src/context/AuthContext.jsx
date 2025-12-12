 <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[50%] p-6 bg-white rounded">
                <h3 className="text-2xl font-bold">User Information</h3>

                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} className="p-2 border rounded" />
                <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleInputChange} className="p-2 border rounded" />
                <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} className="p-2 border rounded" />

                <div className="flex gap-4">
                    <label><input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleInputChange} /> Male</label>
                    <label><input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleInputChange} /> Female</label>
                </div>

                <div className="flex gap-4">
                    <label><input type="checkbox" name="hobbies" value="reading" checked={formData.hobbies.includes("reading")} onChange={handleCheckbox} /> Reading</label>
                    <label><input type="checkbox" name="hobbies" value="sports" checked={formData.hobbies.includes("sports")} onChange={handleCheckbox} /> Sports</label>
                    <label><input type="checkbox" name="hobbies" value="gaming" checked={formData.hobbies.includes("gaming")} onChange={handleCheckbox} /> Gaming</label>
                </div>

                <button type="submit" className="p-2 bg-black text-white rounded">Submit</button>
            </form>